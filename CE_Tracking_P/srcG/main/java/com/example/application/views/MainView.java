package com.example.application.views;

import com.vaadin.flow.component.dependency.JavaScript;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route // localhost:8080/
@JavaScript("frontend://index.js")
public class MainView {
    public MainView() {
    }
}
