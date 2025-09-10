class ProductLayout{

    tablePageLayout(){
        return cy.get(".product-layout")
    }

    verificationproduct(){
        return cy.get(".col-sm-6.text-right")
    }


    showlimitProduct(){
        return cy.get("select#input-limit-212402")
    }


}
module.exports = new ProductLayout()