import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RenderUniquePixels from './renderUniquePixels';

Enzyme.configure({adapter: new Adapter()});

const mockHeight = 128;
const mockWidth = 256;
describe("RenderUniquePixels", () => {
    it("Should Render Component", () => {
        const component = shallow(<RenderUniquePixels 
                                    height={mockHeight} 
                                    width={mockWidth}/>
                                 );
        expect(component.getElements()).toMatchSnapshot();
    });

    it("Should Render Unique Pixels with the given Height and Width", () => {
        const component = shallow(<RenderUniquePixels 
                                    height={mockHeight} 
                                    width={mockWidth}/>
                                 );
        const element = component.find('div.card-body');
        expect(element.props().height).toEqual('128px');
        expect(element.props().width).toEqual('256px');
    });
});