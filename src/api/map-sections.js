export const mapSections = (sections = []) => {
    return sections.map((section) => {
        if(section.__component === 'section.section-two-columns'){
            return mapSectionTwoColumns();
        }
        if(section.__component === 'section.section-content'){
            return mapSectionContent(section);
        }
        if(section.__component === 'section.section-grid'){
            mapSectionGrid(section);
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
    return section
}

export const mapSectionGrid = (section) => {
    return section
}