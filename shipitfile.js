module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/var/www/atlantaskateboarding.com/',
      repositoryUrl: 'https://github.com/sean-roberts/atlantaskateboarding.com.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '~/.ssh/id_rsa.pub',
      shallowClone: true
    },

    production: {
      servers: 'deployer@107.170.4.224'
    }
  });


  // shipit.task('start',function(){

  //   var done = this.async();
  //   var current = shipit.options.deployTo '/current';
  //   grunt.shipit.remote('cd ' + current + ' && npm start', done);

  //   return shipit.remote('cd ' + current + ' && npm start', done);
  // });

  // shipit.task('install',function(){
  //   return shipit.remote('npm install');
  // });

  // shipit.on('updated', function(){
  //   shipit.start(['install']);
  // });

  // shipit.on('published', function(){
  //   // shipit.start(['start']);
  // });

};