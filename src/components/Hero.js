import React from 'react';
import _ from 'lodash';

import {markdownify, Link} from '../utils';

export default class Hero extends React.Component {
    render() {
        return (
            <section class="hero">
                <div class="hero__title">{markdownify(_.get(this.props, 'page.html'))}</div>
                <Link to="/store" class="link hero__link">
                  See all plants
                  <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z" fill="#88DD9B"/></svg>            
                </Link>
            </section>
        );
    }
}
