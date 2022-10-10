describe("tests", function() {
    before(() => alert("Testing started - before all tests"));
    beforeEach(() => console.log("Before a test - enter test"));
    afterEach(() => console.log("After a test - exiting test"));
    describe("pow", function () {
        describe("raised to 3", function () {
    
            function generateTest(x){
                let expected = x*x*x;
                it(`${x} raised to 3 is ${expected}`, function(){
                    assert.equal(pow(x,3),expected);
                })
            }
            for(let i=1; i<=5; i++)
                generateTest(i);
    
        });

        describe("handle negative power", function () {
            it("for negative n, result is NaN", function(){
                assert.isNaN(pow(2,-1));
            });
            it("for non-integer n the result is NaN", function() {
                assert.isNaN(pow(2, 1.5));
              });
        })
    });

    after(() => alert("Testing ended - after all tests"));
    
});
