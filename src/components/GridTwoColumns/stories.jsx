import { GridTwoColumns } from '.';

export default {
    title: 'GridTwoColumns',
    component: GridTwoColumns,
    args: {
        title: 'Grid two columns',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        srcImage: 'assets/images/background.png'
    },
    argTypes: {
        children: { type: 'string' },
    },
}

export const Template = (args) => {
    return (
        <div>
            <GridTwoColumns {...args} />
        </div>
    )
}
