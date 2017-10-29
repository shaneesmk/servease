import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { HomeService } from './home.service';
// import { Product } from '.Product';
import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    id:number;
    customer:any;
    productName:String;
    product:any;
    count : number=1;
    // r : Product=new Product(1);

    toDos: string[];

    cartProduct(){
       
            console.log(this.toDos.length);

        
    

    }

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private homeService: HomeService
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
    getCustomer(){

        console.log("eeee"+this.id);
        this.homeService.viewStates(this.id).finally(() => {
          
       
         }).
           subscribe((res) => {
            //localStorage.setItem('cId', this.id+"");
             this.customer = res; console.log(res)
           }, (error) => console.log(error))
    }
    getProduct(){
        
                
                this.homeService.getProduct(this.productName).finally(() => {
                  
               
                 }).
                   subscribe((res) => {
                    //localStorage.setItem('cId', this.id+"");
                     this.product = res; console.log(res)
                   }, (error) => console.log(error))
            }
}
