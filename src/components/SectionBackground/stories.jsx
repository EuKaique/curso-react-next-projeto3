import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>SectionBackground</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Rem nulla ducimus illum explicabo sunt nemo voluptate natus cum voluptatem nisi?
                </p>
            </div>         
        ),
    },
    argTypes: {
        children: { type: '' },
    },
}

export const Template = (args) => {
    return (
        <div>
            <SectionBackground {...args} />
        </div>
    )
}
