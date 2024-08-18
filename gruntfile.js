module.exports= function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.JSON'),
        less:{
            devolepment:{
                files: {
                    'main.css':" main.less"
                }
                },
                production:{
                    options:{
                        compress:true,
                    },
                    files:{
                        'main.min.css':'main.less'
                    }
                }
            }

            ,uglify: {
                target:{
                    files:{
                        'scripts/main.min.js': 'scripts/main.js'
                    }
                }
            }
        })
    
    

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default','less');
    grunt.registerTask('build',['uglify'])
}