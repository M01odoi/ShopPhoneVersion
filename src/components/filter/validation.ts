const validation: Function = (name: string): boolean => {
    return !!name.length && name !== 'New Category';
}

export default validation;