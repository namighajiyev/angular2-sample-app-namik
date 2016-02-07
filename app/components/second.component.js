System.register(['angular2/core', 'angular2/router', '../services/message.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, message_service_1;
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent(_service, _router) {
                    this._service = _service;
                    this._router = _router;
                }
                SecondComponent.prototype.goToFirst = function () {
                    this._router.navigate(['First']);
                };
                SecondComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getMessages().then(function (messages) { return _this.messages = messages; });
                    this.messages = [];
                    this.message = '';
                    this.errors = [];
                    this.isNewMessageValid = false;
                };
                SecondComponent.prototype.addMessage = function () {
                    this.validateNewMessage(this.message);
                    if (!this.isNewMessageValid) {
                        return;
                    }
                    this._service.addMessage(this.message);
                    this.message = '';
                    this.isNewMessageValid = false;
                };
                SecondComponent.prototype.validateNewMessage = function (newMessage) {
                    this.errors = [];
                    var isEmpty = newMessage ? false : true;
                    var isInValidFormat = isEmpty ? false : newMessage.toLowerCase().includes('igor');
                    if (isEmpty || isInValidFormat) {
                        if (isEmpty) {
                            this.errors.push("Message is required!");
                        }
                        if (isInValidFormat) {
                            this.errors.push("Message can't contain 'igor'!");
                        }
                        this.isNewMessageValid = false;
                    }
                    else {
                        this.isNewMessageValid = true;
                    }
                };
                SecondComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/views/second-view.html",
                        providers: [message_service_1.MessageService]
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
                ], SecondComponent);
                return SecondComponent;
            })();
            exports_1("SecondComponent", SecondComponent);
        }
    }
});
//# sourceMappingURL=second.component.js.map