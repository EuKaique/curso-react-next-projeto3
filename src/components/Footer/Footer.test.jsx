import { screen } from '@testing-library/react'
import { Footer } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Footer />', () => {
    it('should render', () => {
        renderTheme(<Footer>Children</Footer>)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })
})
