const request = require('supertest');
const sinon = require('sinon');
const expect = require('chai').expect;
var validator = require('../src/modules/validators/validator');
var app;

describe('Admin Endpoint', function() {

    beforeEach(function() {
        
        sinon.stub(validator, 'validate').callsFake(function (req, res, next)  {
            return next();
        })
        app = require('../src/app');
    });

    afterEach(() => {
       validator.validate.restore();
    });

    it('POST /getAlertHistory should return 200 if domain is exist', function(done) {
        request(app).post('/apis/admin/sep/admin/alerthistory/tmrnd.com.my?offset=0').end(function(err, res) {
            expect(res.body.statusCode).to.equal(200);
            done();
        });
    })

    it('POST /getAlertHistory should return 500 if domain is not exist', function(done) {
        request(app).post('/apis/admin/sep/admin/alerthistory/notexist.com.my').end(function(err, res) {
            expect(res.body.statusCode).to.equal(500);
            done();
        });
    })
})