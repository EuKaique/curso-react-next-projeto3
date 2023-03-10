import { screen } from '@testing-library/react'
import { NavLinks } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<NavLinks />', () => {
    it('should render', () => {
        renderTheme(<NavLinks>Children</NavLinks>)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })
})
