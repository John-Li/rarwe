var Band = Ember.Object.extend({
  name: '',
});

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var daughter = Song.create({
  title: 'Daughter',
  band: 'Pearl Jam',
  rating: 5
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

var BandsCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['name'],
  sortAscending: false,
  content: []
});

var bands = BandsCollection.create();

var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs:
[blackDog] });

var pearlJam = Band.create({ name: 'Pearl Jam', songs:
[daughter, yellowLedbetter] });

var fooFighters = Band.create({ name: 'Foo Fighters', songs:
[pretender] });

bands.pushObjects([ledZeppelin, pearlJam, fooFighters]);

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
