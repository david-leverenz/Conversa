const { Messages } = require('../models');

const messageData = [{"message_text":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","user_id":8,"room_id":1},
{"message_text":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","user_id":1,"room_id":4},
{"message_text":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","user_id":8,"room_id":4},
{"message_text":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","user_id":10,"room_id":3},
{"message_text":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","user_id":3,"room_id":5},
{"message_text":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","user_id":1,"room_id":1},
{"message_text":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","user_id":7,"room_id":5},
{"message_text":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","user_id":5,"room_id":3},
{"message_text":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","user_id":3,"room_id":5},
{"message_text":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","user_id":4,"room_id":3},
{"message_text":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","user_id":3,"room_id":3},
{"message_text":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","user_id":9,"room_id":5},
{"message_text":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","user_id":4,"room_id":1},
{"message_text":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","user_id":10,"room_id":1},
{"message_text":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","user_id":5,"room_id":5},
{"message_text":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","user_id":8,"room_id":4},
{"message_text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","user_id":5,"room_id":4},
{"message_text":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","user_id":1,"room_id":4},
{"message_text":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","user_id":3,"room_id":5},
{"message_text":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","user_id":2,"room_id":4},
{"message_text":"Sed ante. Vivamus tortor. Duis mattis egestas metus.","user_id":10,"room_id":3},
{"message_text":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","user_id":6,"room_id":1},
{"message_text":"Fusce consequat. Nulla nisl. Nunc nisl.","user_id":6,"room_id":4},
{"message_text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","user_id":5,"room_id":3},
{"message_text":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","user_id":10,"room_id":4},
{"message_text":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","user_id":4,"room_id":2},
{"message_text":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","user_id":6,"room_id":5},
{"message_text":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","user_id":8,"room_id":5},
{"message_text":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","user_id":5,"room_id":4},
{"message_text":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","user_id":8,"room_id":2},
{"message_text":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","user_id":9,"room_id":1},
{"message_text":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","user_id":1,"room_id":3},
{"message_text":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","user_id":5,"room_id":3},
{"message_text":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","user_id":1,"room_id":3},
{"message_text":"Phasellus in felis. Donec semper sapien a libero. Nam dui.","user_id":7,"room_id":2},
{"message_text":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","user_id":10,"room_id":4},
{"message_text":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","user_id":8,"room_id":1},
{"message_text":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","user_id":9,"room_id":4},
{"message_text":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","user_id":2,"room_id":5},
{"message_text":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","user_id":5,"room_id":5},
{"message_text":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","user_id":1,"room_id":4},
{"message_text":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","user_id":1,"room_id":3},
{"message_text":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","user_id":7,"room_id":5},
{"message_text":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","user_id":5,"room_id":1},
{"message_text":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","user_id":4,"room_id":2},
{"message_text":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","user_id":9,"room_id":2},
{"message_text":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","user_id":2,"room_id":1},
{"message_text":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","user_id":10,"room_id":5},
{"message_text":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","user_id":10,"room_id":1},
{"message_text":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","user_id":5,"room_id":2}];

const seedMessages = () => Messages.bulkCreate(messageData);

module.exports = seedMessages;