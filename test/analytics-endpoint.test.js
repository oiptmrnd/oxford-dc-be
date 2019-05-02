const analyticsEp = require('../src/modules/endpoints/analytics-endpoints');
const expect = require('chai').expect;

describe.skip('Analytics Endpoints', function() {

    it('getUsageByDestination(week) should return 200 and its results', async() => {
        const result = await analyticsEp.getUsageByDestination('2.2', 'week', undefined);
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(5000);

    it('getUsageByDestination(month) should return 200 and its results', async() => {
        const result = await analyticsEp.getUsageByDestination('2.2', 'month', 9);
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(5000);

    it('getUsageByDestination(invalidParam) should return 500 and its error msg', async() => {
        try{
            const result = await analyticsEp.getUsageByDestination('notexist');
        } catch(e) {
            expect(e.statusCode).to.equal(500);
            expect(typeof e.message).to.equal('string');
        }
    });

    it('getAPILatencies() should return 200 and and its results', async() => {
            const result = await analyticsEp.getAPILatencies();
            expect(result.statusCode).to.equal(200);
            expect(typeof result.message).to.equal('object');
    }).timeout(10000);

    it('getFaultyInvocations() should return 200 and and its results', async() => {
        const result = await analyticsEp.getFaultyInvocations();
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(10000);

    it('getFaultyInvocationsSummary() should return 200 and and its results', async() => {
        const result = await analyticsEp.getFaultyInvocationsSummary();
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(10000);

    it('getTotalRequestByBrowser() should return 200 and and its results', async() => {
        const result = await analyticsEp.getTotalRequestByBrowser();
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(10000);

    it('getTotalRequestByOs() should return 200 and and its results', async() => {
        const result = await analyticsEp.getTotalRequestByOs();
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(10000);

    it('getTotalRequestPerUserAgent() should return 200 and and its results', async() => {
        const result = await analyticsEp.getTotalRequestPerUserAgent();
        expect(result.statusCode).to.equal(200);
        expect(typeof result.message).to.equal('object');
    }).timeout(10000);

});