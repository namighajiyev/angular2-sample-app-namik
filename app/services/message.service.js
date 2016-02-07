System.register(['angular2/core', '../models/mock-messages'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_messages_1;
    var MessageService, messagesPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_messages_1_1) {
                mock_messages_1 = mock_messages_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                }
                MessageService.prototype.getMessages = function () { return messagesPromise; };
                MessageService.prototype.addMessage = function (message) {
                    var messageObj = { text: message };
                    this.getMessages().then(function (messages) { return messages.push(messageObj); });
                };
                MessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MessageService);
                return MessageService;
            })();
            exports_1("MessageService", MessageService);
            messagesPromise = Promise.resolve(mock_messages_1.MESSAGES);
        }
    }
});
//# sourceMappingURL=message.service.js.map