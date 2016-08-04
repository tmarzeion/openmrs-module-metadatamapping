class SetController {
  constructor($rootScope) {
    "ngInject";
    var vm = this;

    $rootScope.links = {};
    $rootScope.links["Manage Mappings"] = "/";
    $rootScope.links["Set "+vm.mapping.name] = "set/";

    vm.resourceDefined = getClass(vm.mapping.metadataClass);
    vm.disableLinksDefined = true;
    vm.limitDefined = 10; //Default value
    vm.customParamsDefined = [
      {
        "property": "def",
        "value": "true"
      }
    ];

    vm.columnsDefined = [
      {
        "property": "name",
        "label": "Name"
      },
      {
        "property": "description",
        "label":"Description"
      },
      {
        "property": "uuid",
        "label": "UUID"
      }];

    vm.actionsDefined = [
      {
        "action":"view",
        "label":"Set",
        "link":"#/set/",
        "icon":"icon-cog edit-action"
      }
    ];

  }
}

function getClass(metadataClass){
  let array = metadataClass.split(".");
  return array[array.length-1].toLowerCase();
}

export default SetController;