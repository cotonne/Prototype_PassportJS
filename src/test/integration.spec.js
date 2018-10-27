const buildApp = require('../../app');
const request = require('supertest');
const passport = require('passport');
const mockStrategy = require('passport-mock-strategy');
const util = require('util');

function RejectStrategy() {
    passport.Strategy.call(this);
    this.name = 'reject';
}

util.inherits(RejectStrategy, passport.Strategy);
RejectStrategy.prototype.authenticate = function () {
    this.fail();
};


describe('Application with express.js', () => {
    it('should redirect unauthenticated user to sign-page', done => {
        passport.use(new RejectStrategy());
        const app = buildApp('reject', passport);
        request(app)
            .get('/users/')
            .expect(302)
            .then(response => {
                expect(response.res.headers.location).toBe('/signin');
                done();
            });
    });
    it('should redirect unauthenticated user to sign-page', () => {
        const STRATEGY = 'mock';
        const user = {
            id: 1,
            name: 'USER',
            provider: STRATEGY,
        };

        passport.use(new mockStrategy({
            name: STRATEGY,
            user,
        }));
        const app = buildApp(STRATEGY, passport);
        request(app)
            .get('/users/')
            .expect(200);
    });
});