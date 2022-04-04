const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const authenticateRouter = require('./src/routes/user/authenticate');
const createUserRouter = require("./src/routes/user/create_user");
const activateEmailRouter = require("./src/routes/user/activate_email");
const forgotPasswordRouter = require("./src/routes/user/forgot_password");
const resetPasswordRouter = require("./src/routes/user/reset_password");
const createClassroomRouter = require("./src/routes/classroom/create_classroom");
const fetchClassRoomRouter = require("./src/routes/classroom/fetch_classrooms");
const enrollClassroomRouter = require("./src/routes/classroom/enroll_classroom");
const postRouter = require("./src/routes/post")
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', authenticateRouter);
app.use('/user', createUserRouter);
app.use('/user', activateEmailRouter);
app.use('/user', forgotPasswordRouter);
app.use('/user', resetPasswordRouter);
app.use('/classroom',createClassroomRouter);
app.use('/classroom',fetchClassRoomRouter);
app.use('/classroom',enrollClassroomRouter);
app.use('/posts',postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   err.json({message : "error!"})
//   // res.status(err.status || 500);
//   // res.render('error');
// });
app.listen(8080,()=>{
  console.log("the server is running on 8080")
})
module.exports = app;
