# Await to js 

[github](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)

[官方博客](https://github.com/scopsy/await-to-js)

## Install

```shell
npm i await-to-js --save
```

## Usage

```javascript
import to from 'await-to-js';
// If you use CommonJS (i.e NodeJS environment), it should be:
// const to = require('await-to-js').default;
async function asyncTaskWithCb(cb) {
  let err, user, saveTask, notification;
  
  [err, user] = await to(UserModel.findById(1));
  if(!user) return cb('No user found')!
    
  [err, savedTask] = await to(TaskModel({userId: user.id}))
  if(err) return cb('Error occurred while saving task');
  
  if(user.notificationsEnabled) {
       [ err ] = await to(NotificationService.sendNotification(user.id, 'Task Created'));
       if(err) return cb('Error while sending notification');
    }
  
  if(savedTask.assignedUser.id !== user.id) {
       [ err, notification ] = await to(NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'));
       if(err) return cb('Error while sending notification');
    }
  cb(null, saveTask);

}

async function asyncFunctionWithThrow() {
  const [err, user] = await to(UserModel.findById(1));
  if (!user) throw new Error('User not found');
  
}
```

## 实现

```javascript
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */

function to(promise, errorExt) {
  return promise.then(function(data){
    return [null, data]
  })
  .catch(function(err) {
    if(errorExt) {
      var parsedError = Object.assign({}, err, errorExt);
      return [parsedError, undefined];
    }
    return [err, undefined];
  });
}

export { to };
export default to;
```

参数为`promise`和可选错误信息对象,

