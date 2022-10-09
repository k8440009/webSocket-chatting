package com.chatting.controllers;

import com.chatting.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class MessageController {
    /**
     * MessageMapping
     * SendTo
     *
     * @param message
     * @return
     * @throws Exception
     */
    @MessageMapping(MessageConst.destination) // 요청
    @SendTo(MessageConst.destination) // 응답
    public Message sendMessage(Message message) throws Exception {
        // Json message key와 Message 객체가 연동
//        System.out.println("connect");
//        System.out.println(message.getMessage());
        Thread.sleep(100); // simulated delay
        return new Message("Hello!");
        //return new Message("Hello, " + HtmlUtils.htmlEscape(message.getMessage()) + "!");
    }
}
