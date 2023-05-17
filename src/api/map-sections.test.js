import { mapSections, mapSectionTwoColumns } from "./map-sections"

describe('map-sections', () => {
    it('should render predefined section if no data', () => {
        const data = mapSections();
        expect(data).toEqual([]);
    })
    
    it('should map section two columns', () => {
        const data = mapSectionTwoColumns()
        expect(data.background).toBe(false)
        expect(data.component).toBe('')
        expect(data.sectionId).toBe('')
        expect(data.srcImg).toBe('')
        expect(data.text).toBe('')
        expect(data.title).toBe('')
    })

    it('should map section two columns', () => {
        const data = mapSectionTwoColumns({
            "__component": "section.section-two-columns",
            "title": "title",
            "description": "abc",
            "image": {
                  "url": "https://res.cloudinary.com/deosirvhi/image/upload/v1651926290/javascript_8c37407653.svg",
                }
            ,
            "metadata": {
              "section_id": "home",
              "background": true
            }
        })
        expect(data.background).toBe(true)
        expect(data.component).toBe('section.section-two-columns')
        expect(data.sectionId).toBe('contact')
        expect(data.srcImg).toBe('a.svg')
        expect(data.text).toBe('abc')
        expect(data.title).toBe('title')
    })
})