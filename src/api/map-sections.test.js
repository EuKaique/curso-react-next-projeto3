import { mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from "./map-sections"

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

    it('should map section two columns test', () => {
        const data = mapSectionTwoColumns({
            "__component": "section.section-two-columns",
            "title": "title",
            "description": "abc",
            "image": {
                  "url": "a.svg",
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

    it('should map section content with no data', () => {
        const data = mapSectionContent({
            __component: 'section.section-content',
            _id: '602fdf2d540c00269e056179',
            title: 'Pricing',
            content: 'abc',
            metadata: {
                background: false,
                _id: '602fdf2d540c00269e056177',
                name: 'pricing',
                __v: 0,
                id: '602fdf2d540c00269e056177'
            },
            __v: 1
        });

        expect(data.background).toBe(false)
        expect(data.component).toBe('section.section-content')
        expect(data.sectionId).toBe('pricing')
        expect(data.html).toBe('abc')
        expect(data.title).toBe('Pricing')

    })

    it('should map section grid text', () => {
        const data = mapTextGrid({
            "id": 1,
            "__component": "section.section-grid",
            "title": "MY GRID",
            "description": "Uma breve descrição",
            "text_grid": [
              {
                "id": 1,
                "title": "Teste 1",
                "description": "123"
              },
              {
                "id": 2,
                "title": "Teste 2",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n"
              },
              {
                "id": 3,
                "title": "Teste 3",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n"
              }
            ],
            "image_grid": [],
            "metadata": {
              "id": 2,
              "name": "grid-one",
              "section_id": "grid-one",
              "background": true
            }
          });

        expect(data.background).toBe(true)
        expect(data.component).toBe('section.section-content')
        expect(data.sectionId).toBe('grid-one')
        expect(data.description).toBe('Uma breve descrição')
        expect(data.title).toBe('MY GRID')
        expect(data.grid[0].title).toBe('Teste 1')
        expect(data.grid[0].description).toBe('123')

    })
})