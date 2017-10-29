import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ServeaseCustomerMySuffixModule } from './customer/customer-my-suffix.module';
import { ServeaseProductMySuffixModule } from './product/product-my-suffix.module';
import { ServeaseCartMySuffixModule } from './cart/cart-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ServeaseCustomerMySuffixModule,
        ServeaseProductMySuffixModule,
        ServeaseCartMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServeaseEntityModule {}
