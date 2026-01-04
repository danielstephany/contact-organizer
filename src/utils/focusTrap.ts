const focusTrap = (rootElement: HTMLElement) => {
    let activeIndex = 0
    let escapeCallback: () => void | undefined;
    const focusElementList: NodeListOf<HTMLElement> = rootElement.querySelectorAll("input, button, select, textarea,  a[href], area[href]")
    const focusElementListEndIndex = focusElementList.length - 1

    focusElementList[activeIndex].focus()


    const incrementFocus = () => {
        activeIndex = (activeIndex < focusElementListEndIndex) ? activeIndex + 1 : 0
        focusElementList[activeIndex].focus()
    }

    const decrementFocus = () => {
        activeIndex = (activeIndex !== 0) ? activeIndex - 1 : focusElementListEndIndex
        focusElementList[activeIndex].focus()
    }

    const setEscape = (fn: () => void) => {
        escapeCallback = fn
    }

    const updateFocus = (e: KeyboardEvent) => {
        e.preventDefault()

        if (e.key === "Tab" && e.shiftKey){
            decrementFocus()
        } else if (e.key === "Tab"){
            incrementFocus()
        } else if (e.key === "Escape" && escapeCallback){
            escapeCallback()
        }

    }


    rootElement.addEventListener("keydown", updateFocus)

    const remove = () => {
        rootElement.removeEventListener("keydown", updateFocus)
    }

    return {
        remove,
        setEscape,
    }
}

export default focusTrap