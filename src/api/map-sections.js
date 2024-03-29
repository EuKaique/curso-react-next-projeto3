export const mapSections = (sections = []) => {
    return sections.map((section) => {
        if(section.__component === 'section.section-two-columns'){
            return mapSectionTwoColumns();
        }
        if(section.__component === 'section.section-content'){
            return mapSectionContent(section);
        }
        if(section.__component === 'section.section-grid'){
            const { __component: { text_grid = [], image_grid = [] } = ''} = section

            if(text_grid.length > 0){
                return mapTextGrid(section)
            }

            if(image_grid.length > 0){
                // return mapImageGrid(section)
            }
        }
        return section
    })
}

export const mapSectionTwoColumns = (section = {}) => {
    const {
        __component: component = '',
        title = '',
        description: text = '',
        image: { url: srcImg = '' } = '',
        metadata: { background = false, section_id: sectionId = '' } = false
    } = section;

    return { component, title, text, srcImg, background, sectionId }
}

export const mapSectionContent = (section) => {
    const {
        __component: component = '',
        title = '',
        content: html = '',
        metadata: { background = false, section_id: sectionId = '' } = false
    } = section;

    return { component, title, html, background, sectionId }
}

export const mapTextGrid = (section) => {
    const {
        __component: component = '',
        title = '',
        description = '',
        metadata: { background = false, section_id: sectionId = '' } = false,
        text_grid: grid = []
    } = section;

    return { component, title, description, grid, background, sectionId }
}