const getElement = (selection) => {
    const element = document.querySelector(selection)
    if(element) {
        return element
    }
    else {
        throw new Error('element is not selected')
    }
}

export default getElement