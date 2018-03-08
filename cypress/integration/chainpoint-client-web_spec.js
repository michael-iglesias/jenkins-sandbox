describe('Chainpoint Client Web', function () {
  it('.should() - assert that <title> is correct', function () {
    // https://on.cypress.io/visit
    cy.visit('http://travis-cypress-test.s3-website-us-east-1.amazonaws.com/')

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', 'Chainpoint Client Sample Code')
    //   ↲               ↲            ↲
    // subject        chainer      value
    cy.wait(1000)
  })

  it('Hashes Textarea should have 3 hashes', function () {
    cy.get('#hashes').should('have.value', '1d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a,2d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a,3d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a')
  })
  context('Network Requests', function () {
    beforeEach(function () {
      cy.visit('http://travis-cypress-test.s3-website-us-east-1.amazonaws.com/')
    })

    it('Submit 3 hashes', function () {
      cy.server()

      cy.get('#submitBtn').click()

      cy.wait(5000).then(function () {
        cy.get('#proofHandles').then(function ($el) {
          let proofHandles = JSON.parse($el.text())
          expect(proofHandles).to.have.length(9)
        })
      })
      .wait(14000).then(function () {
        cy.get('#proofObjects').then(function ($el) {
          let proofObjects = JSON.parse($el.text())
          expect(proofObjects).to.have.length(9)
        })
      })
      .wait(5000).then(function () {
        cy.get('#verifiedProofs').then(function ($el) {
          let verifiedProofs = JSON.parse($el.text())
          expect(verifiedProofs).to.have.length(9)
          verifiedProofs.forEach(p => {
            expect(p).to.have.property('verified')
            expect(p.verified).to.be.true
          })
        })
      })
    })
  })
})
