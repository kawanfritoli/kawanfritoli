import { useRouter } from './RouterContext.js'

function isModifiedClick(event) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
}

export default function Link({ to, onClick, ...props }) {
  const { navigate } = useRouter()

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || isModifiedClick(event)) return
    if (navigate(to)) event.preventDefault()
  }

  return <a {...props} href={to} onClick={handleClick} />
}
