// HW5 - Q1 ---------------

let count = 0;

let user = {
  increase: function () {
    return count++;
  },

  decrease: function () {
    return count--;
  },

  reset: function () {
    count = 0;
  },

  read: function () {
    console.log(`${count}`);
  },
};

user.increase();
user.decrease();
user.decrease();
user.decrease();
user.reset();
user.read();