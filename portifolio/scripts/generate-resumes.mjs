import fs from 'node:fs'
import path from 'node:path'

const outputDirectory = path.resolve('public')

const resumes = {
  pt: {
    fileName: 'curriculo-kawan-fritoli-pt.pdf',
    name: 'KAWAN FRITOLI',
    role: 'DESENVOLVEDOR DE SOFTWARE',
    summary:
      'Desenvolvedor de software, com experiência em desenvolvimento full-stack e DevOps. Atua na criação de interfaces, APIs, bancos de dados, testes automatizados e infraestrutura de aplicações.',
    education: 'Análise e Desenvolvimento de Sistemas - São Paulo Tech School',
    focus: 'Full Stack Development e DevOps',
    experience: [
      {
        period: '2026 - Atual',
        role: 'Estagiário em Desenvolvimento - Semantix',
        description:
          'Desenvolvimento full-stack do MySeat, com interfaces, APIs, banco de dados e garantia de qualidade. Atuação adicional em DevOps, gerenciamento e sustentação da infraestrutura da aplicação.',
      },
      {
        period: '2025 - 2026',
        role: 'Estagiário em Desenvolvimento - Atos',
        description:
          'Desenvolvimento full-stack do MySeat, sistema corporativo de reserva de mesas. Responsabilidade por interfaces, APIs REST, banco de dados, testes automatizados e code reviews.',
      },
    ],
    labels: ['PERFIL', 'FORMAÇÃO', 'FOCO', 'EXPERIÊNCIA PROFISSIONAL', 'TECNOLOGIAS', 'CONTATO'],
    technologies: 'Angular | NestJS | PostgreSQL | Git | Docker | Kubernetes | Azure',
    contact: 'kfritoligomes@gmail.com | github.com/kawanfritoli | linkedin.com/in/kawan-fritoli',
  },
  en: {
    fileName: 'curriculo-kawan-fritoli-en.pdf',
    name: 'KAWAN FRITOLI',
    role: 'SOFTWARE DEVELOPER',
    summary:
      'Software developer with experience in full-stack development and DevOps. Works on interfaces, APIs, databases, automated testing and application infrastructure.',
    education: 'Systems Analysis and Development - São Paulo Tech School',
    name: 'KAWAN FRITOLI',
    role: 'SOFTWARE DEVELOPER',
    summary:
      'Software developer with experience in full-stack development and DevOps. Works on interfaces, APIs, databases, automated testing and application infrastructure.',
    education: 'Systems Analysis and Development - Sao Paulo Tech School',
    focus: 'Full Stack Development and DevOps',
    experience: [
      {
        period: '2026 - Present',
        role: 'Development Intern - Semantix',
        description:
          'Full-stack development of MySeat, including interfaces, APIs, databases and quality assurance. Additional DevOps work covering application infrastructure management and maintenance.',
      },
      {
        period: '2025 - 2026',
        role: 'Development Intern - Atos',
        description:
          'Full-stack development of MySeat, a corporate desk booking system. Responsible for interfaces, REST APIs, databases, automated testing and code reviews.',
      },
    ],
    labels: ['PROFILE', 'EDUCATION', 'FOCUS', 'PROFESSIONAL EXPERIENCE', 'TECHNOLOGIES', 'CONTACT'],
    technologies: 'Angular | NestJS | PostgreSQL | Git | Docker | Kubernetes | Azure',
    contact: 'kfritoligomes@gmail.com | github.com/kawanfritoli | linkedin.com/in/kawan-fritoli',
  },
}

const cp1252 = {
  'á': 0xe1,
  'ã': 0xe3,
  'ç': 0xe7,
  'é': 0xe9,
  'í': 0xed,
  'ó': 0xf3,
  'ô': 0xf4,
  'õ': 0xf5,
  'ú': 0xfa,
  'Á': 0xc1,
  'Ã': 0xc3,
  'Ç': 0xc7,
  'É': 0xc9,
  'Í': 0xcd,
  'Ó': 0xd3,
  'Ô': 0xd4,
  'Õ': 0xd5,
  'Ú': 0xda,
}

function pdfString(value) {
  const bytes = []
  for (const character of value) bytes.push(cp1252[character] ?? character.charCodeAt(0))
  return `<${Buffer.from(bytes).toString('hex')}>`
}

function wrap(text, maxLength) {
  const words = text.split(' ')
  const lines = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxLength) {
      lines.push(current)
      current = word
    } else {
      current = `${current} ${word}`.trim()
    }
  }
  if (current) lines.push(current)
  return lines
}

function createPdf(resume) {
  const commands = []
  let y = 790
  const addText = (text, size = 10, font = 'F1', color = '0.12 0.12 0.12') => {
    commands.push(`BT ${color} rg /${font} ${size} Tf 54 ${y} Td ${pdfString(text)} Tj ET`)
    y -= size + 5
  }
  const addSection = (label) => {
    y -= 7
    commands.push(`0.12 0.12 0.12 rg 54 ${y} 504 1 re f`)
    y -= 18
    addText(label, 9, 'F2', '0.12 0.12 0.12')
  }

  addText(resume.name, 24, 'F2')
  addText(resume.role, 11, 'F1', '0.35 0.35 0.35')
  y -= 8
  addSection(resume.labels[0])
  for (const line of wrap(resume.summary, 98)) addText(line, 10)
  addSection(resume.labels[1])
  addText(resume.education)
  addSection(resume.labels[2])
  addText(resume.focus)
  addSection(resume.labels[3])
  for (const item of resume.experience) {
    addText(item.period, 9, 'F2', '0.35 0.35 0.35')
    addText(item.role, 10, 'F2')
    for (const line of wrap(item.description, 98)) addText(line, 9)
    y -= 5
  }
  addSection(resume.labels[4])
  addText(resume.technologies)
  addSection(resume.labels[5])
  for (const line of wrap(resume.contact, 98)) addText(line, 9)

  const stream = Buffer.from(commands.join('\n'), 'latin1')
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    `<< /Length ${stream.length} >>\nstream\n${stream.toString('latin1')}\nendstream`,
  ]
  let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'
  const offsets = [0]
  for (let index = 0; index < objects.length; index += 1) {
    offsets.push(Buffer.byteLength(pdf, 'latin1'))
    pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`
  }
  const xrefOffset = Buffer.byteLength(pdf, 'latin1')
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  for (let index = 1; index <= objects.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
  return Buffer.from(pdf, 'latin1')
}

fs.mkdirSync(outputDirectory, { recursive: true })
for (const resume of Object.values(resumes)) {
  fs.writeFileSync(path.join(outputDirectory, resume.fileName), createPdf(resume))
}
