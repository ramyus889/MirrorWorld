import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../components-ui/ui/menubar";

export default function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer">
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="cursor-pointer">
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="cursor-pointer">
              Share
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem className="cursor-pointer">Email link</MenubarItem>
              <MenubarItem className="cursor-pointer">Messages</MenubarItem>
              <MenubarItem className="cursor-pointer">Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem className="cursor-pointer">
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer">
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="cursor-pointer">
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="cursor-pointer">
              Find
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem className="cursor-pointer">
                Search the web
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="cursor-pointer">Find...</MenubarItem>
              <MenubarItem className="cursor-pointer">Find Next</MenubarItem>
              <MenubarItem className="cursor-pointer">
                Find Previous
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem className="cursor-pointer">Cut</MenubarItem>
          <MenubarItem className="cursor-pointer">Copy</MenubarItem>
          <MenubarItem className="cursor-pointer">Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem className="cursor-pointer">
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem className="cursor-pointer" checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset className="cursor-pointer">
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset className="cursor-pointer">
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset className="cursor-pointer">
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset className="cursor-pointer">
            Hide Sidebar
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem className="cursor-pointer" value="andy">
              Andy
            </MenubarRadioItem>
            <MenubarRadioItem className="cursor-pointer" value="benoit">
              Benoit
            </MenubarRadioItem>
            <MenubarRadioItem className="cursor-pointer" value="Luis">
              Luis
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem className="cursor-pointer" inset>
            Edit...
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="cursor-pointer" inset>
            Add Profile...
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
