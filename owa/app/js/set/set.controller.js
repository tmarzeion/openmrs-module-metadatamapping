class SetController {
  constructor($rootScope) {
    "ngInject";
    var vm = this;

    $rootScope.links = {};
    $rootScope.links["Manage Mappings"] = "/";
    $rootScope.links["Set "+vm.mapping.name] = "set/";

    vm.resource = getClass(vm.mapping.metadataClass);
    vm.disableLinks = true;
    vm.limit = 10; //Default value
    vm.customParams = [
      {
        "property": "def",
        "value": "true"
      }
    ];

    vm.columns = [
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

    vm.actions = [
      {
        "action":"select",
        "label":"select",
        "icon":"icon-ok edit-action"
      }
    ];
  }
}

function getClass(metadataClass){
  if (angular.isDefined(metadataClass)) {
    let array = metadataClass.split(".");
    return array[array.length-1].toLowerCase();
  }
}

export default SetController;