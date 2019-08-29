/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('js/main.js')}/>
            <script src={_.get(this.props, 'pageContext.site.siteMetadata.snipcart_js')} defer/>
            <div hidden id="snipcart" data-api-key={_.get(this.props, 'pageContext.site.siteMetadata.snipcart_api_key')}>
              <cart-header title="Planty">
                <div class="root">
                  <header class="snipcart-cart-header" v-if="!loading">
                    <close-cart-action class="snipcart-cart-header__close-button snipcart-modal__close">
                      <icon class="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow" />
                      <span class="snipcart-modal__close-title snipcart__font--std">
                        &#123;&#123; $localize('actions.continue_shopping') &#125;&#125;
                      </span>
                    </close-cart-action>
                    <h3 class="snipcart-cart-header__title snipcart__font--black snipcart__font--secondary" v-if="title">
                      <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.logos.dark.optimized'))} alt=""/>
                    </h3>
                    <div class="snipcart-cart-header__count snipcart__font--secondary snipcart__font--bold">
                      <icon name="cart" class="snipcart-cart-header__icon snipcart__icon--blue-dark" />
                      &#123;&#123; itemsCount &#125;&#125;
                    </div>
                  </header>
                  <header class="snipcart-cart-header" v-else>
                    <close-cart-action class="snipcart-modal__close">
                      <icon class="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow" />
                      <span class="snipcart-modal__close-title snipcart__font--std">
                        &#123;&#123; itemsCount &#125;&#125;
                      </span>
                    </close-cart-action>
                  </header>
                </div>
              </cart-header>
              <checkout section="header">
                <div class="root">
                  <div class="snipcart-layout__header">
                    <header class="snipcart-modal__header snipcart-modal__header--fixed">
                      <close-cart-action class="snipcart-modal__close">
                        <icon name="back-arrow" class="snipcart-modal__close-icon snipcart__icon--blue-light"
                          alt="actions.close_cart" />
                        <span class="snipcart-modal__close-title snipcart__font--std">
                          &#123;&#123; $localize('actions.continue_shopping') &#125;&#125;
                        </span>
                      </close-cart-action>
                      <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.logos.dark.optimized'))} alt="" class="snipcart-modal__logo"/>
                      <div class="snipcart-modal__header-summary">
                        <div
                          class="snipcart-modal__header-summary-title snipcart__font--large snipcart__font--secondary snipcart__font--bold"clickprevent="showSummary">
                          <icon name="cart" class="snipcart__icon--blue-dark" />
                          <span>
                            &#123;&#123; total | money(cart.currency) &#125;&#125;
                          </span>
                          <media name="mobile, tablet">
                            <icon name="summaryIcon" class="snipcart__icon--blue-dark snipcart__icon--medium" />
                          </media>
                        </div>
                        <cart-summary class="snipcart-cart-summary--small" v-if="summaryVisible"close="closeSummary"></cart-summary>
                      </div>
                    </header>
                  </div>
                </div>
              </checkout>
            </div>
            
        </React.Fragment>
    ]);

};
