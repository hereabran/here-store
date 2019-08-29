import React from 'react';
import _ from 'lodash';

import Picture from './Picture';

export default class ProductCard extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page');
        return (
            <li class="product__card">
                <figure class="product__card__image">
                    <Picture {...this.props} image={_.get(product_page, 'frontmatter.images.default.thumbnail')} alt={_.get(product_page, 'frontmatter.title')} />
                </figure>
                <h2 class="product__card__title">
                    {_.get(product_page, 'frontmatter.title')}
                </h2>
            </li>
        );
    }
}
