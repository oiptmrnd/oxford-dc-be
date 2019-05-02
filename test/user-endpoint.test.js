const request = require('supertest');
const sinon = require('sinon');
const expect = require('chai').expect;
var validator = require('../src/modules/validators/validator');
var app;

describe.skip('User Endpoint', function() {

    beforeEach(function() {
        
        sinon.stub(validator, 'validate').callsFake(function (req, res, next)  {
            return next();
        })
        app = require('../src/app');
    });

    afterEach(() => {
       validator.validate.restore();
    });

    it('GET /sep/users/:version/all/:tenantid', function(done) {
        request(app).get('/apis/admin/sep/users/2.2/all/1?limit=10').end(function(err, res) {
            expect(res.body.statusCode).to.equal(200);
            done();
        });
    })

    // it('POST /getAlertHistory should return 500 if domain is not exist', function(done) {
    //     request(app).post('/apis/admin/sep/admin/alerthistory/notexist.com.my').end(function(err, res) {
    //         expect(res.body.statusCode).to.equal(500);
    //         done();
    //     });
    // })
})