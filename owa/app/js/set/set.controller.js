class SetController {
  constructor($rootScope, $state, singleTermmapping) {

    var vm = this;

    vm.singleTermmapping = singleTermmapping;

    vm.uuid = $state.params.UUID;
    $rootScope.links = {};
    $rootScope.links["Manage Mappings"] = "/";
    $rootScope.links["Set"] = "/set";
  }
}

export default SetController;