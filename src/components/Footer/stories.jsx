import { Footer } from '.';

export default {
    title: 'Footer',
    component: Footer,
    args: {
        html: `<p><a href="http://eukaique.github.io/curriculo"> Feito de &#10084; por Kaique Oliveira Santos</a></p>`,
    }
}

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    )
}
