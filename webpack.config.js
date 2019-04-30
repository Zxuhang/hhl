const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成新Html
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理上次编译文件（dist）
const lessMiniCssExtractPlugin = require("mini-css-extract-plugin");//将文本从包或包中提取到单独的文件中
const cssMiniCssExtractPlugin = require("mini-css-extract-plugin");//将文本从包或包中提取到单独的文件中


 module.exports = {
	//  mode:"development",
	 mode:"production",
    entry: {
      public: './src/js/public.js',
      index: './src/js/index.js',
      about: './src/js/about.js',
      contact: './src/js/contact.js',
      service: './src/js/service.js',
      case: './src/js/case.js',
      details: './src/js/details.js',
      print:'./src/js/print.js'
    },
    devtool: 'inline-source-map',
    devServer:{
    	contentBase:'./dist'
    },
    module: {
        rules: [
        	{
		        test: /\.less$/,
		        use:[
							{
								loader:lessMiniCssExtractPlugin.loader,
								options:{
									publicPath: '../../'
								}
							},
							{
								loader:"css-loader"
							},
							{
								loader:"less-loader"
							}							
						]
		    },{
		        test: /\.css$/,
		        use: [
		          {
								loader:cssMiniCssExtractPlugin.loader,
								// options:{
								// 	publicPath: './'
								// }
							},
		          "css-loader",
		        ]
		    },
		    {
		        test: /\.(ttf|eot|woff|woff2|svg)$/,
		        use: {
		          loader:'file-loader',//生成文件字体图标，输出到输出目录并返回公共网址
							options:{
								name: '[path][hash].[ext]',
								publicPath:'../../'
							}
		        }
	        },
		    {
		        test: /\.(png|jpg|gif)$/,
		        use: {
		          loader:'file-loader',//生成文件file.png，输出到输出目录并返回公共网址
							options:{
								// publicPath: '../../',
								// outputPath: __dirname+"src/images/",
								name: '[path][hash].[ext]'
							}
		        }
	        },
	      {
			  		test: /\.(html)$/,
						use: {
							loader: 'html-loader',//将HTML导出为字符串。当编译器需要时，HTML被最小化
							options: {
								minimize: true,//减少到最低限度
								attrs: ['img:src', 'img:data-src', 'audio:src']
							}
						}
				},
				{
	          test: require.resolve('jquery'),
	          use: [{
	              loader: 'expose-loader',
	              options: 'jQuery'
	          },{
	              loader: 'expose-loader',
	              options: '$'
	          }]
	        }
        ]
    },
    plugins: [
      new lessMiniCssExtractPlugin({filename: "src/style/[name].css"}),
      new cssMiniCssExtractPlugin({filename: "src/style/[name].css"}),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '互惠乐官网',//页面标题
        favicon: "",//ico图标
        filename:'index.html',//输出文件路径名称
        chunks:['public','index'],//需要引入的模块（js)
        inject:'head',//模块注入到什么位置
        template:'index.html',//模板源
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      }),
      new HtmlWebpackPlugin({
        title: '关于我们',//页面标题
        favicon: "",//ico图标
        filename:'about.html',//输出文件路径名称
        chunks:['public','about'],//需要引入的模块（js)
        inject:'head',//模块注入到什么位置
        template:'about.html',//模板源
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      }),
      new HtmlWebpackPlugin({
        title: '联系我们',//页面标题
        favicon: "",//ico图标
        filename:'contact.html',//输出文件路径名称
        chunks:['public','contact'],//需要引入的模块（js)
        inject:'head',//模块注入到什么位置
        template:'contact.html',//模板源
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      }),
      new HtmlWebpackPlugin({
        title: '服务方案',//页面标题
        favicon: "",//ico图标
        filename:'service.html',//输出文件路径名称
        chunks:['public','service'],//需要引入的模块（js)
        inject:'head',//模块注入到什么位置
        template:'service.html',//模板源
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      }),
      new HtmlWebpackPlugin({
        title: '成功案例',//页面标题
        favicon: "",//ico图标
        filename:'case.html',//输出文件路径名称
        chunks:['public','case'],//需要引入的模块（js)
        inject:'head',//模块注入到什么位置
        template:'case.html',//模板源
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      }),
      new HtmlWebpackPlugin({
        title: '项目细节',//页面标题
        favicon: "",//ico图标
        filename:'details.html',//输出文件路径名称
        chunks:['public','details'],//需要引入的模块（js)
        inject:'head',//模块注入到什么位置
        template:'details.html',//模板源
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      }),
      new HtmlWebpackPlugin({
        title: '新闻中心',
        favicon: "",
        filename:'newcenter.html',
        chunks:['print'],
        inject:'head',
        template:'newCenter.html',
        splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
		    }
		}
      })
    ],
    output: {
      filename: 'src/js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    

};