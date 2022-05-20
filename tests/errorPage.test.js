
let Component = require("../client/src/components/ErrorPage");


  describe("ErrorPage", ()=> {

    it("It should show an error message",()=>{

        expect(Component).to.have("p");
        let message = ("p");
        expect(message.text()).to.include("404");
    })
});