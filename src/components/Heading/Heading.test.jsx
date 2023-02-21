import { Heading } from './';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
    it('should render with default values', () => {
      const { debug } = renderTheme(<Heading>texto</Heading>);
      const heading = screen.getByRole('heading', {name: 'texto'})
      
      expect(heading).toHaveStyle({
        color: theme.colors.dark,
        'font-size': theme.font.size.xhuge,
        'text-transform': 'none'
      })
    })

    it('should render with color with', () => {
        const { debug } = renderTheme(<Heading colorDark={false}>texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'texto'})
        
        expect(heading).toHaveStyle({
          color: theme.colors.light
        })
      })
  });