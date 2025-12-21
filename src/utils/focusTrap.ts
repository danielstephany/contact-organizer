const focusTrap = (rootElement: HTMLElement) => {
    let activeIndex = 0
    const focusElementList: NodeListOf<HTMLElement> = rootElement.querySelectorAll("input, button, select, textarea,  a[href], area[href]")
    const focusElementListEndIndex = focusElementList.length - 1

    focusElementList[activeIndex].focus()
    console.log(focusElementList)

    const incrementFocus = () => {
        activeIndex = (activeIndex < focusElementListEndIndex) ? activeIndex + 1 : 0
        focusElementList[activeIndex].focus()
    }

    const decrementFocus = () => {
        activeIndex = (activeIndex !== 0) ? activeIndex - 1 : focusElementListEndIndex
        focusElementList[activeIndex].focus()
    }

    const updateFocus = (e: KeyboardEvent) => {
        e.preventDefault()

        if (e.key === "Tab" && e.shiftKey){
            decrementFocus()
        } else if (e.key === "Tab"){
            incrementFocus()
        }

    }

    rootElement.addEventListener("keydown", updateFocus)

    const remove = () => {
        rootElement.removeEventListener("keydown", updateFocus)
    }

    return remove
}

export default focusTrap