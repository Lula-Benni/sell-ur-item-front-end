package com.lulamile.firstSpringBootApp.controller;

import com.lulamile.firstSpringBootApp.entity.Item;
import com.lulamile.firstSpringBootApp.entity.Profile;
import com.lulamile.firstSpringBootApp.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {
    @Autowired
    private ItemService itemService;
    @CrossOrigin
    @PostMapping("/save-item")
    public Item saveItem(@RequestBody Item item){return itemService.saveItem(item);}
    @CrossOrigin
    @GetMapping("/get-items")
    public List<Item> fetchItems(){return itemService.fetchItems();}
    @CrossOrigin
    @GetMapping("/get-item/{id}")
    public Item fetchItemById(@PathVariable("id") int itemId){return itemService.fetchItemById(itemId);}
    @DeleteMapping("delete-item/{id}")
    public String deleteItem(@PathVariable("id") int itemId){return itemService.deleteItem(itemId);}
    @PutMapping("update-item/{id}")
    public Item updateItem(@PathVariable("id") int itemId, @RequestBody Item item){return itemService.updateItem(itemId,item);}
}
