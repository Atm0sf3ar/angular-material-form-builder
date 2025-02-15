import { AgreementViewCtrl } from './agreement-view.controller'
import AgreementViewTemplate from './agreement-view.tpl.html'

class AgreementView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout
    this.template = AgreementViewTemplate
    this.restrict = 'E'
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '=',
    }
    this.controller = AgreementViewCtrl
    this.controllerAs = 'AgreementView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {AgreementViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, element, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)
  }

  static directiveFactory($timeout) {
    AgreementView.instance = new AgreementView($timeout)
    return AgreementView.instance
  }
}

AgreementView.directiveFactory.$inject = ['$timeout']

export { AgreementView }
