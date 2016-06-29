const chai = require('chai');
const should = chai.should();
const agent = require('supertest-koa-agent');
const app = require('./../server.js');
const api = agent(app);
describe('api', () => {
  describe('Criar usuário', () => {
    it('com email válido', (done) => {
      api.put('/customers')
            .send({
              name: 'João Silveira',
              email: 'joaosilveira@email.com',
            })
            .expect(200)
            .end((err, res) => {
              should.not.exist(err);
              res.body.name.should.be.equal('João Silveira');
              res.body.email.should.be.equal('joaosilveira@email.com');
              done();
            });
    });
    it('com email válido', (done) => {
      api.put('/customers')
            .send({
              name: 'João Silveira',
              email: 'joaosilveira',
            })
            .expect(400)
            .end((err, res) => {
              should.not.exist(err);
              res.body.error.should.be.equal('InvalidEmail');
              done();
            });
    });
  });
});
