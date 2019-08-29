import React from 'react';
import _ from 'lodash';

import {safePrefix, Link} from '../utils';
import Picture from './Picture';
import SmallBuyButton from './SmallBuyButton';

export default class FeaturedProducts extends React.Component {
    render() {
        let product_pages = _.get(this.props, 'product_pages');
        return (
            <ul class="product-grid product-grid--draggable">
                {_.map(product_pages, (product_page, product_page_idx) => (
                    <li key={product_page_idx} class="product-grid__item">
                        <figure data-href={safePrefix(_.get(product_page, 'url'))} class="js-figure-link product-grid__item-figure js-figure-link">
                            <Picture {...this.props} image={_.get(product_page, 'frontmatter.images.featured.thumbnail')} alt={_.get(product_page, 'frontmatter.title')} cssClass={'product-grid__item-image product-grid__item-image--featured'} />
                            <figcaption>
                                <SmallBuyButton {...this.props} product_page={product_page} component={'product-grid'} />
                            </figcaption>
                        </figure>
                        <div class="product-grid__definition">
                            <h3 class="product-grid__title"> <Link to={safePrefix(_.get(product_page, 'url'))}> {_.get(product_page, 'frontmatter.title')} </Link> </h3>
                            <span class="product-grid__category"> {_.get(product_page, 'frontmatter.category')} </span>
                            <span class="product-grid__price"> ${_.get(product_page, 'frontmatter.price')} </span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}
