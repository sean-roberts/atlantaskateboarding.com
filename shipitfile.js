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


  shipit.blTask('restart',function(){
    // var done = this.async();
    var current = shipit.config.deployTo + '/current';
    return shipit.remote('cd ' + current + ' && npm restart');
  });

  shipit.blTask('install',function(){
    // var done = this.async();
    var current = shipit.config.deployTo + '/current';
    return shipit.remote('cd ' + current + ' && npm install && npm ls -depth 0');
  });

  shipit.on('updated', function(){
    shipit.start(['install']);
  });

  shipit.on('published', function(){
    shipit.start(['restart']);
  });

};