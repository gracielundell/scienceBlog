import Model from 'ember-data/model';
import Ember from 'ember';
import Reference from './reference';

import { assertPolymorphicType } from "ember-data/-private/utils";

var BelongsToReference = function BelongsToReference(store, parentInternalModel, belongsToRelationship) {
  this._super$constructor(store, parentInternalModel);
  this.belongsToRelationship = belongsToRelationship;
  this.type = belongsToRelationship.relationshipMeta.type;
  this.parent = parentInternalModel.recordReference;

  // TODO inverse
};

BelongsToReference.prototype = Object.create(Reference.prototype);
BelongsToReference.prototype.constructor = BelongsToReference;
BelongsToReference.prototype._super$constructor = Reference;

BelongsToReference.prototype.remoteType = function () {
  if (this.belongsToRelationship.link) {
    return "link";
  }

  return "id";
};

BelongsToReference.prototype.id = function () {
  var inverseRecord = this.belongsToRelationship.inverseRecord;
  return inverseRecord && inverseRecord.id;
};

BelongsToReference.prototype.link = function () {
  return this.belongsToRelationship.link;
};

BelongsToReference.prototype.meta = function () {
  return this.belongsToRelationship.meta;
};

BelongsToReference.prototype.push = function (objectOrPromise) {
  var _this = this;

  return Ember.RSVP.resolve(objectOrPromise).then(function (data) {
    var record;

    if (data instanceof Model) {
      record = data;
    } else {
      record = _this.store.push(data);
    }

    assertPolymorphicType(_this.internalModel, _this.belongsToRelationship.relationshipMeta, record._internalModel);

    _this.belongsToRelationship.setCanonicalRecord(record._internalModel);

    return record;
  });
};

BelongsToReference.prototype.value = function () {
  var inverseRecord = this.belongsToRelationship.inverseRecord;
  return inverseRecord && inverseRecord.record;
};

BelongsToReference.prototype.load = function () {
  var _this2 = this;

  if (this.remoteType() === "id") {
    return this.belongsToRelationship.getRecord();
  }

  if (this.remoteType() === "link") {
    return this.belongsToRelationship.findLink().then(function (internalModel) {
      return _this2.value();
    });
  }
};

BelongsToReference.prototype.reload = function () {
  var _this3 = this;

  return this.belongsToRelationship.reload().then(function (internalModel) {
    return _this3.value();
  });
};

export default BelongsToReference;