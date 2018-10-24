const StarNotary = artifacts.require('StarNotary')

contract('StarNotary', accounts => { 
    const name = 'Star'
    const story = 'my udacity star'
    const _ra = '000'
    const _dec = '1000'
    const _mag = '0001'
    const id = 1

    beforeEach(async function() { 
        this.contract = await StarNotary.new({from: accounts[0]})
    })
    
    describe('create new star', () => { 
        it('create new star', async function () { 
            
            await this.contract.createStar(name, story, _ra, _dec, _mag, {from: account[0]});

            // test tokenIdToStarInfo() method
            it('get data', async function() { 
                assert.equal(await this.contract.tokenIdToStarInfo(id), [name, story, ra, dec, mag]);
            });
        })
    })

    describe('for star present', () => {
        it('check if star exist', async function () {
            await this.contract.createStar(name, story, _ra, _dec, _mag, {from: defaultAccount})

            assert.equal(await this.contract.checkIfStarExist(_ra, _dec, _mag), true)
        })
    })
    
    describe('mint function', () => {
        beforeEach(async function(done) {
            id = await this.contract.mint(tokenId, {from: defaultAccount})
            done
        })

        it('mint', async function () {
            assert.equal(await this.contract.ownerOf(id, {from: defaultAccount}), defaultAccount)
        })
    })
})